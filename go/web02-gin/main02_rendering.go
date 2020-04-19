//package main
//
//import (
//	"github.com/gin-gonic/gin"
//	"github.com/gin-gonic/gin/testdata/protoexample"
//	"net/http"
//)
//
//func main() {
//	r := gin.Default()
//	r.GET("/someJson", func(context *gin.Context) {
//		context.JSON(http.StatusOK, gin.H{"message": "hey", "statue": http.StatusOK})
//	})
//
//	r.GET("/moreJson", func(ctx *gin.Context) {
//		var msg struct{
//			Name string `json:"user"`
//			Message string
//			Number int
//		}
//		msg.Name = "carmen"
//		msg.Message = "Hello World"
//		msg.Number = 10000
//		// 注意 msg.Name 变成了了 "user" 字段
//		// 以下⽅方式都会输出 : {"user": "ls", "Message": "hey", "Number": 123}
//		ctx.JSON(http.StatusOK, msg)
//	})
//	r.GET("/someXML", func(c *gin.Context) {
//		c.XML(http.StatusOK, gin.H{"user":"ls","message": "hey", "status":
//		http.StatusOK}) })
//	r.GET("/someYAML", func(c *gin.Context) {
//		c.YAML(http.StatusOK, gin.H{"message": "hey", "status": http.StatusOK})
//	})
//
//	r.GET("/someProtoBuf", func(c *gin.Context) {
//		reps := []int64{int64(1), int64(2)}
//		label := "test"
//		data := &protoexample.Test{
//			Label: &label,
//			Reps: reps,
//		}
//		c.ProtoBuf(http.StatusOK, data)
//	})
//
//	r.GET("/redirect", func(c *gin.Context) {
//		//⽀支持内部和外部的重定向
//		c.Redirect(http.StatusMovedPermanently, "http://www.google.com/") })
//
//
//	r.GET("/test", func(c *gin.Context) { // 指定重定向的URL
//		c.Request.URL.Path = "/test2"
//		r.HandleContext(c) })
//
//	r.GET("/test2", func(c *gin.Context) {
//		c.JSON(http.StatusOK, gin.H{"hello": " Test1 -> Test2 world"})
//	})
//	r.Run(":3000")
//}
