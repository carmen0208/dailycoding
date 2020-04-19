package main

import (
	"fmt"
	"github.com/garyburd/redigo/redis"
)

//http://doc.redisfans.com/
func main() {
	conn, err := redis.Dial("tcp", "localhost:6379")
	defer conn.Close()
	if err != nil {
		fmt.Println("connect redis error: ", err)
		return
	}
	fmt.Println("connection success...")
	_, err = conn.Do("SET", "name", "carmen")
	if err != nil {
		fmt.Println("redis set error:", err)
	}
	name, err := redis.String(conn.Do("GET", "name"))
	if err != nil {
		fmt.Println("redis get error:", err)
	} else {
		fmt.Printf("Got name: %s \n", name)
	}
}
