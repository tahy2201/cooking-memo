
CREATE TABLE recipes (
    id SERIAL NOT NULL,
    title varchar(255) not null,
    thumbnail varchar(255),
    description varchar(255),
    ingredients jsonb,
    process jsonb,
    src_link varchar(255),
    owner_id BIGINT NOT NULL,
    create_at timestamp not null,
    update_at timestamp not null,
    primary key(id)
);

CREATE TABLE users (
    id SERIAL NOT NULL,
    login_id varchar(255) not null, 
    name varchar(255) not null,
    thumbnail varchar(255),
    first_name varchar(255),
    last_name varchar(255),
    profile varchar(3000),
    create_at timestamp not null,
    update_at timestamp not null,
    primary key(id)
);

