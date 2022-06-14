package com.tahy.coome.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class S3ClientConfig {

    @Value("${asset.s3.accessKey}")
    private String accessKey;

    @Value("${asset.s3.secretKey}")
    private String secretKey;

    @Bean
    public AmazonS3 generateS3Client() {
        System.out.println("accessKey: " + accessKey + " secretKey: " + secretKey);
        // TODO localの場合のみ使用するようにする
        BasicAWSCredentials credentials = new BasicAWSCredentials(
                this.accessKey,
                this.secretKey);
        EndpointConfiguration endpointConfiguration = new EndpointConfiguration("http://172.26.50.167:9090",
                Regions.AP_NORTHEAST_1.getName());
        // AccessKey等は環境変数から取得する
        return AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(endpointConfiguration)
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .build();
    }
}
