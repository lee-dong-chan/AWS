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
+----------------------+------------------------+------+-----+---------+----------------+
| Field                | Type                   | Null | Key | Default | Extra          |
+----------------------+------------------------+------+-----+---------+----------------+
| id                   | tinyint unsigned       | NO   | PRI | NULL    | auto_increment |
| cardname             | varchar(10)            | NO   | UNI | NULL    |                |
| skilldamage          | tinyint                | YES  |     | NULL    |                |
| defualtdamageincrese | tinyint                | YES  |     | NULL    |                |
| costrecovery         | tinyint                | YES  |     | NULL    |                |
| requirecostdecrese   | tinyint                | YES  |     | NULL    |                |
| requirecost          | tinyint unsigned       | NO   |     | NULL    |                |
| shield               | tinyint                | YES  |     | NULL    |                |
| cardproperty         | enum('user','monster') | NO   |     | NULL    |                |
+----------------------+------------------------+------+-----+---------+----------------+
```

```decklist
+--------------+------------------------+------+-----+---------+-------+
| Field        | Type                   | Null | Key | Default | Extra |
+--------------+------------------------+------+-----+---------+-------+
| id           | tinyint unsigned       | NO   |     | NULL    |       |
| deckproperty | enum('user','monster') | YES  |     | NULL    |       |
| skillcard_id | tinyint unsigned       | NO   |     | NULL    |       |
+--------------+------------------------+------+-----+---------+-------+
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
| name          | varchar(10)      | NO   | UNI | NULL    |                |
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

```talent
+-------------------------+------------------+------+-----+---------+----------------+
| Field                   | Type             | Null | Key | Default | Extra          |
+-------------------------+------------------+------+-----+---------+----------------+
| id                      | tinyint          | NO   | PRI | NULL    | auto_increment |
| name                    | varchar(10)      | NO   | UNI | NULL    |                |
| increseMaxHP            | tinyint          | YES  |     | NULL    |                |
| increseUserDefultDamage | tinyint unsigned | YES  |     | NULL    |                |
| increseMaxcost          | tinyint unsigned | YES  |     | NULL    |                |
+-------------------------+------------------+------+-----+---------+----------------+
```

```handheldtalent
+----------------+------------------+------+-----+---------+-------+
| Field          | Type             | Null | Key | Default | Extra |
+----------------+------------------+------+-----+---------+-------+
| id             | tinyint unsigned | NO   |     | NULL    |       |
| handheldtalent | tinyint unsigned | NO   | PRI | NULL    |       |
+----------------+------------------+------+-----+---------+-------+
```
