package be.jonas.boon.portfolio.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;

@Builder(setterPrefix = "with")
@AllArgsConstructor
@Getter
@Setter
public class PostsDTO {

    private String title;
    private LocalDate timeOfWriting;
    private File filePath;
    private byte[] content;

    public PostsDTO(File file) {
        this.title = file.getName();
        this.filePath = file;
        try{
            this.content = Files.readAllBytes(filePath.toPath());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static class Mapper {
        public static PostsDTO mapTo(String title){
            return PostsDTO.builder()
                    .withTitle(title)
                    .build();
        }
    }
}
