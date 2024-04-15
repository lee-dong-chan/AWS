```database
+--------------------+
| Database           |
+--------------------+
| game               |
| information_schema |
| performance_schema |
+--------------------+
```

```tables
+----------------+
| characterlist  |
| decklist       |
| maplist        |
| monster        |
| playlog        |
| skillcard      |
| stagelist      |
| user           |
+----------------+
```

```skillcard
+----------------------+------------------+------+-----+---------+----------------+
| id                   | tinyint unsigned | NO   | PRI | NULL    | auto_increment |
| cardname             | varchar(10)      | NO   |     | NULL    |                |
| skilldamage          | tinyint          | YES  |     | NULL    |                |
| defualtdamageincrese | tinyint          | YES  |     | NULL    |                |
| costrecovery         | tinyint          | YES  |     | NULL    |                |
| requirecostdecrese   | tinyint          | YES  |     | NULL    |                |
| requirecost          | tinyint unsigned | NO   |     | NULL    |                |
| shield               | tinyint          | YES  |     | NULL    |                |
+----------------------+------------------+------+-----+---------+----------------+
```

```decklist
+--------------+------------------------+------+-----+---------+----------------+
| Field        | Type                   | Null | Key | Default | Extra          |
+--------------+------------------------+------+-----+---------+----------------+
| id           | tinyint unsigned       | NO   | PRI | NULL    | auto_increment |
| cardproperty | enum('user','monster') | NO   |     | NULL    |                |
| skillcard_id | tinyint unsigned       | NO   |     | NULL    |                |
+--------------+------------------------+------+-----+---------+----------------+
```

```characterlist
+-------------------+------------------------+------+-----+---------+----------------+
| Field             | Type                   | Null | Key | Default | Extra          |
+-------------------+------------------------+------+-----+---------+----------------+
| id                | tinyint unsigned       | NO   | PRI | NULL    | auto_increment |
| defaultDamage     | tinyint unsigned       | NO   |     | NULL    |                |
| defaultHealth     | tinyint unsigned       | NO   |     | NULL    |                |
| defaultCost       | tinyint unsigned       | NO   |     | NULL    |                |
| characterProperty | enum('user','monster') | NO   |     | NULL    |                |
+-------------------+------------------------+------+-----+---------+----------------+
```

```user
+------------------+------------------+------+-----+---------+-------+
| Field            | Type             | Null | Key | Default | Extra |
+------------------+------------------+------+-----+---------+-------+
| characterlist_id | tinyint unsigned | NO   |     | NULL    |       |
| decklist_id      | tinyint unsigned | NO   |     | NULL    |       |
+------------------+------------------+------+-----+---------+-------+
```

```monster
+------------------+------------------+------+-----+---------+----------------+
| Field            | Type             | Null | Key | Default | Extra          |
+------------------+------------------+------+-----+---------+----------------+
| id               | tinyint unsigned | NO   | PRI | NULL    | auto_increment |
| decklist_id      | tinyint unsigned | NO   |     | NULL    |                |
| characterlist_id | tinyint unsigned | NO   |     | NULL    |                |
+------------------+------------------+------+-----+---------+----------------+
```

```maplist
+---------------+------------------+------+-----+---------+----------------+
| Field         | Type             | Null | Key | Default | Extra          |
+---------------+------------------+------+-----+---------+----------------+
| id            | tinyint unsigned | NO   | PRI | NULL    | auto_increment |
| backgroundimg | longblob         | NO   |     | NULL    |                |
| floorimg      | longblob         | NO   |     | NULL    |                |
+---------------+------------------+------+-----+---------+----------------+
```

```stagelist
+------------+------------------+------+-----+---------+----------------+
| Field      | Type             | Null | Key | Default | Extra          |
+------------+------------------+------+-----+---------+----------------+
| id         | tinyint unsigned | NO   | PRI | NULL    | auto_increment |
| maplist_id | tinyint unsigned | NO   | UNI | NULL    |                |
| stagename  | varchar(10)      | NO   | UNI | NULL    |                |
| monster_id | tinyint unsigned | NO   |     | NULL    |                |
+------------+------------------+------+-----+---------+----------------+
```

```playlog
+---------------+--------------------+------+-----+---------+-------+
| Field         | Type               | Null | Key | Default | Extra |
+---------------+--------------------+------+-----+---------+-------+
| stageResultHP | tinyint unsigned   | NO   |     | NULL    |       |
| stageResult   | enum('win','lose') | NO   |     | NULL    |       |
+---------------+--------------------+------+-----+---------+-------+
```
