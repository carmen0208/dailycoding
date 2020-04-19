//package main
//// step1:导⼊入包
//import (
//	"database/sql"
//	"fmt"
//	_ "github.com/go-sql-driver/mysql"
//)
//
//type User struct {
//	uid int
//	username string
//	departname string
//	created string
//}
//func main() {
//	/*
//		连接数据库:func Open(driverName, dataSourceName string) (*DB, error) Open打开⼀一个dirverName指定的数据库，dataSourceName指定数据源， ⼀一般包⾄至少括数据库⽂文件名和(可能的)连接信息。
//		driverName: 使⽤用的驱动名. 这个名字其实就是数据库驱动注册到 database/sql 时所使⽤用的名 字.
//		dataSourceName: 数据库连接信息，这个连接包含了了数据库的⽤用户名, 密码, 数据库主机以及需要 连接的数据库名等信息.
//
//		drvierName,"mysql" dataSourceName,⽤用户名:密码@协议(地址:端⼝口)/数据库?参数=参数值
//	*/
//	// step2:打开数据库，相当于和数据库建⽴立连接:db对象
//	//"root:12345678@tcp(127.0.0.1:3306)/go_test?charset=utf8"
//	db, err := sql.Open("mysql", "root:12345678@tcp(localhost:3306)/go_test")
//	fmt.Println(db)
//	fmt.Println(err)
//	if err != nil {
//		fmt.Println(fmt.Println("连接有误。。"))
//		return
//	}
//	fmt.Println("连接成功。。")
//	defer db.Close()
//
//	//step3:插⼊入⼀一条数据
//	rows, err := db.Query("SELECT uid,username,departname,created FROM userinfo")
//	defer rows.Close()
//	//var uid int
//	//var username, departname, created string
//	///*
//	//row:Scan()-->将查询的结果从row取出
//	//err对象 判断err是否为空，
//	//为空，查询有结果，数据可以成功取出 不不为空，没有数据，sql: no rows in result set
//	//*/
//	//err = row.Scan(&uid, &username, &departname, &created)
//	////fmt.Println(err)
//	if err != nil {
//		fmt.Println("查⽆无数据。。")
//		return
//	}
//	datas := make([]User, 0)
//	for rows.Next() {
//		var uid int
//		var username string
//		var departname string
//		var created string
//		if err := rows.Scan(&uid, &username, &departname, &created); err != nil {
//			fmt.Println("获取失败。。")
//		}
//		//每读取⼀一⾏行行，创建⼀一个user对象，存⼊入datas2中
//		user := User{uid, username, departname, created}
//		datas = append(datas, user)
//	}
//	for _, v := range datas { fmt.Println(v)
//	}
//}
