package be.jonas.boon.portfolio.service;

import be.jonas.boon.portfolio.DTO.PostsDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static be.jonas.boon.portfolio.service.PageService.PageServiceUtils.getAllFilePaths;
import static java.lang.String.format;

@Service
public class PageService {

    @Value("${posts.blog.path}")
    private String pagePath;

    @Deprecated(forRemoval = true)
    public Set<String> getPageTitles(){
        File folder = new File(pagePath);
        return getPageTitles(folder);
    }

    public Set<String> getPageTitles(String location){
        File folder = new File(pagePath + "/" + location);
        return getPageTitles(folder);
    }

    private static Set<String> getPageTitles(File folder) {
        return getAllFilePaths(folder).stream()
                .map(File::getName)
                .map(PostsDTO.Mapper::mapTo)
                .map(PostsDTO::getTitle)
                .collect(Collectors.toSet());
    }

    @Deprecated(forRemoval = true)
    public PostsDTO getPageByName(String title) {
        File folder = new File(pagePath);
        return getPostsDTO(title, folder);
    }

    public PostsDTO getPageByName(String location, String title) {
        File folder = new File(pagePath + "/" + location);
        return getPostsDTO(title, folder);
    }

    private static PostsDTO getPostsDTO(String title, File folder) {
        return getAllFilePaths(folder).stream()
                .filter(file -> file.getName().equals(title))
                .map(PostsDTO::new)
                .findFirst()
                .orElseThrow(PageServiceError.pageNotFound(title));
    }

    protected static class PageServiceError extends RuntimeException {

        public PageServiceError(String message) {
            super(message);
        }

        public static Supplier<PageServiceError> pageNotFound(String pageTitle){
            return () -> new PageServiceError(format("Page: %s not found", pageTitle));
        }

    }
    protected static class PageServiceUtils {
         public static List<File> getAllFilePaths(File folder) {
            List<File> fileList = new ArrayList<>();

            if (folder.isDirectory()) {
                File[] files = folder.listFiles();
                if (files != null) {
                    for (File file : files) {
                        if (file.isDirectory()) {
                            // Recursively search subdirectories
                            fileList.addAll(getAllFilePaths(file));
                        } else {
                            // Add files to the list
                            fileList.add(file);
                        }
                    }
                }
            }
            return fileList;
        }
    }
}