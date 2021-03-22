function addUser(data) {
    // note: this returns a Promise
    return db.one('INSERT INTO users (name) values (\$1) RETURNING id, name', [data.name]);
  }
  