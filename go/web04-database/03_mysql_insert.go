package main
// step1:导⼊入包
import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	/*
		连接数据库:func Open(driverName, dataSourceName string) (*DB, error) Open打开⼀一个dirverName指定的数据库，dataSourceName指定数据源， ⼀一般包⾄至少括数据库⽂文件名和(可能的)连接信息。
		driverName: 使⽤用的驱动名. 这个名字其实就是数据库驱动注册到 database/sql 时所使⽤用的名 字.
		dataSourceName: 数据库连接信息，这个连接包含了了数据库的⽤用户名, 密码, 数据库主机以及需要 连接的数据库名等信息.

		drvierName,"mysql" dataSourceName,⽤用户名:密码@协议(地址:端⼝口)/数据库?参数=参数值
	*/
	// step2:打开数据库，相当于和数据库建⽴立连接:db对象
	//"root:12345678@tcp(127.0.0.1:3306)/go_test?charset=utf8"
	db, err := sql.Open("mysql", "root:12345678@tcp(localhost:3306)/go_test")
	fmt.Println(db)
	fmt.Println(err)
	if err != nil {
		fmt.Println(fmt.Println("连接有误。。"))
		return
	}
	fmt.Println("连接成功。。")
	defer db.Close()

	//step3:插⼊入⼀一条数据
	stmt, err := db.Prepare("INSERT INTO userinfo(username, departname, created) values(?,?,?)")
	if err != nil {
		fmt.Println("操作失败")
		fmt.Println(err)
		return
	}
	result, err := stmt.Exec("Kitty Cat","Product Delivery","2020-04-19")
	if err !=nil{
		fmt.Println("插⼊入数据失败。。") }
	//step4:处理理sql操作后的结果
	lastInsertId,err:=result.LastInsertId()
	rowsAffected,err:=result.RowsAffected()
	fmt.Println("lastInsertId",lastInsertId)
	fmt.Println("影响的⾏行数:", rowsAffected)
	//再次插⼊入数据:
	result,_=stmt.Exec("king kang","human resource","2019-11-11")
	count,_:=result.RowsAffected()
	fmt.Println("影响的行行数:",count)
	//step5:关闭资源
	stmt.Close()
	db.Close()
}
