package com.tahy.coome.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import com.fasterxml.jackson.databind.JsonNode;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@EqualsAndHashCode(callSuper = false)
@Table(name = "recipes", schema = "public")
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class Recipe extends TimeEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Type(type = "jsonb")
    @Column(name = "ingredients", columnDefinition = "json")
    private JsonNode ingredients;

    @Type(type = "jsonb")
    @Column(name = "process", columnDefinition = "json")
    private JsonNode process;

    @Column(name = "srcLink")
    private String srcLink;

    @Column(name = "owner_id")
    private Integer ownerId;
}
