package be.jonas.boon.portfolio.service;

import be.jonas.boon.portfolio.DTO.PostsDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
@ExtendWith(SpringExtension.class)
class PageServiceITTest {

    @Autowired
    PageService pageService;

    @Test
    public void folderName_getFiles_listOfFileNames() throws FileNotFoundException {
        //given
        File fileContent = ResourceUtils.getFile("src/test/resources/test-pages/Java/AssertJ.md");

        //when
        PostsDTO pageByName = pageService.getPageByName("AssertJ.md");

        //then
        assertThat(pageByName.getTitle())
                .isEqualTo("AssertJ.md");
        assertThat(pageByName.getFilePath())
                .isEqualTo(fileContent);
    }

    @Test
    public void folderName_getFileNames_listOfFileNames(){
        //given

        //when
        Set<String> pageTitles = pageService.getPageTitles();

        //then
        assertThat(pageTitles).contains("AssertJ.md");
        assertThat(pageTitles).size().isEqualTo(26);
    }

}