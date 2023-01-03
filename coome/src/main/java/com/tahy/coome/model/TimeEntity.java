package com.tahy.coome.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@MappedSuperclass
public class TimeEntity {

    @Column(name = "create_at", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createAt;

    @Column(name = "update_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateAt;

    @PrePersist
    public void onPrePersist() {
        setCreateAt(new Date());
        setUpdateAt(new Date());
    }

    @PreUpdate
    public void onPreUpdate() {
        setUpdateAt(new Date());
    }
}
