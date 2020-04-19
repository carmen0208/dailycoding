package middleWares

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"time"
)

func MiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		t := time.Now()
		fmt.Println("before middleware")
		c.Set("request", "client_request")
		c.Next()

		status := c.Writer.Status()
		fmt.Println("after middleware", status)
		t2 := time.Since(t)
		fmt.Println("time:", t2)
	}
}
