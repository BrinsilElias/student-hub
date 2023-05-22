package com.brinsil.studenthub;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Controller
public class StaticFileController {

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public @ResponseBody byte[] getIndex() throws IOException {
        ClassPathResource indexHtml = new ClassPathResource("static/index.html");
        return Files.readAllBytes(Path.of(indexHtml.getURI()));
    }
}
