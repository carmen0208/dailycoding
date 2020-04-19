//package main
//
//import (
//	"github.com/gin-gonic/gin"
//	"log"
//	"time"
//)
//
//func main() {
//	r := gin.Default()
//
//	r.GET("/long_async", func(c *gin.Context) {
//		cCp := c.Copy()
//		go func() {
//			time.Sleep(5* time.Second)
//			// 注意使⽤用只读上下⽂文
//			log.Println("Done! in path " + cCp.Request.URL.Path)
//		}()
//	})
//
//	r.GET("/long_sync", func(c *gin.Context) {
//		time.Sleep(5 * time.Second)
//		log.Println("Done, in path" + c.Request.URL.Path)
//	})
//
//	r.Run(":3000")
//}
