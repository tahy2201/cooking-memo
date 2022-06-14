package com.tahy.coome.controller;

import java.io.IOException;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.tahy.coome.configuration.AppProperty;

@RestController
public class AssetController {

    private AmazonS3 s3Client;

    private AppProperty prop;

    Logger logger = LoggerFactory.getLogger(RestDbtestController.class);

    @Autowired
    public AssetController(AmazonS3 s3Client, AppProperty prop) {
        this.s3Client = s3Client;
        this.prop = prop;
    }

    @PostMapping("/upload/img/")
    public void uploadImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String name) {
        try (InputStream io = file.getInputStream()) {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            s3Client.putObject(prop.getAssetS3BucketName(), name, file.getInputStream(), metadata);
        } catch (IOException ie) {
            ie.printStackTrace();
        }
    }

}
