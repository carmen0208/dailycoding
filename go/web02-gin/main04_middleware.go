//package main
//
//import (
//	"fmt"
//	"github.com/gin-gonic/gin"
//	"net/http"
//	"web02-gin/middleWares"
//)
//
//func main() {
//	r := gin.Default()
//	r.Use(middleWares.MiddleWare())
//	{
//		r.GET("/middleware", func(c *gin.Context) {
//			request := c.MustGet("request").(string)
//			req, _ := c.Get("request")
//			fmt.Println("request:", request)
//			c.JSON(http.StatusOK, gin.H{
//				"middile_request": request,
//				"request":         req,
//			})
//		})
//	}
//	r.Run(":3000")
//}
