package be.jonas.boon.portfolio.controller;

import be.jonas.boon.portfolio.DTO.PostsDTO;
import be.jonas.boon.portfolio.service.PageService;
import be.jonas.boon.portfolio.validation.page.PageInputValidation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("api/v1/pages")
public class PagesController {

    private final PageService pageService;

    public PagesController(PageService pageService){
        this.pageService = pageService;
    }

    @GetMapping
    public Set<String> getPagesTitles(@RequestParam String location){
        return pageService.getPageTitles(location);
    }

    @GetMapping("/byName")
    public PostsDTO getPageByName(@RequestParam String location, @RequestParam String title){
        PageInputValidation.validate(title);
        return pageService.getPageByName(location, title);
    }
}
