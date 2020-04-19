package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	var secrets = gin.H{
		"ls":   gin.H{"email": "ls@lianshiclass.com", "phone": "123456"},
		"yang": gin.H{"email": "yang@lianshiclass.com", "phone": "111111"},
		"edu":  gin.H{"email": "edu@lianshiclass.com", "phone": "666666"},
	}
	authorized := r.Group("/admin", gin.BasicAuth(gin.Accounts{
		"cl":   "123",
		"yang": "111",
		"edu":  "666",
		"ls":   "123",
	}))

	authorized.GET("/secrets", func(c *gin.Context) {
		user := c.MustGet(gin.AuthUserKey).(string)
		if secret, ok := secrets[user]; ok {
			c.JSON(http.StatusOK, gin.H{"user": user, "secret": secret})
		} else {
			c.JSON(http.StatusOK, gin.H{"user": user, "secret": "NO SECRET :("})
		}
	})

	r.Run(":3000")
}
