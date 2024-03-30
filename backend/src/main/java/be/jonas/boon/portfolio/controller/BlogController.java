package be.jonas.boon.portfolio.controller;

import be.jonas.boon.portfolio.DTO.PostsDTO;
import be.jonas.boon.portfolio.service.PageService;
import be.jonas.boon.portfolio.validation.page.PageInputValidation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/v1/blog")
public class BlogController {

    private final PageService pageService;

    public BlogController(PageService pageService){
        this.pageService = pageService;
    }

    @GetMapping
    public Set<String> getBlogPostNames(){
        return pageService.getPageTitles();
    }

    @GetMapping("/byName")
    public PostsDTO getPageByName(@RequestParam String title){
        PageInputValidation.validate(title);
        return pageService.getPageByName(title);
    }
}
