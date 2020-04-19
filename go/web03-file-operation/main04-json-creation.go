package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Server struct {
	ServerName string
	ServerIP   string
}
type Serverslice struct {
	Servers []Server
}

func main() {
	//type Server struct {
	//	// ID 不不会导出到JSON中
	//	ID int `json:"-"`
	//	// ServerName 的值会进⾏行行⼆二次JSON编码
	//	ServerName string `json:"serverName"`
	//	ServerName2 string `json:"serverName2,string"`
	//	// 如果 ServerIP 为空，则不不输出到JSON串串中
	//	ServerIP string `json:"serverIP,omitempty"`
	//}
	//s := Server {
	//	ID: 3,
	//	ServerName: `Go "1.0" `, ServerName2: `Go "1.0" `, ServerIP: ``,
	//}
	var s Serverslice
	s.Servers = append(s.Servers, Server{ServerName: "Shanghai_VPN",
		ServerIP: "127.0.0.1"})
	s.Servers = append(s.Servers, Server{ServerName: "Beijing_VPN", ServerIP:
	"127.0.0.2"})
	b, err := json.Marshal(s)
	if err != nil {
		fmt.Println("json err:", err)
	}
	//b, _ := json.Marshal(s)
	os.Stdout.Write(b)
}
