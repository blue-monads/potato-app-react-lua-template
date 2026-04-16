create table Authors(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL,
    quotes TEXT NOT NULL DEFAULT '',
    UNIQUE(slug)
);
