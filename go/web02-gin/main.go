package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"web02-gin/initRounter"
)

func main() {
	type Login struct {
		User string `form:"username" json:"user" uri:"user" xml:"user"
binding:"required"`
		Password string `form:"password" json:"password" uri:"password"
xml:"password" binding:"required"`
	}

	router := initRounter.SetUpRouter()
	router.LoadHTMLGlob("views/*.html")

	router.GET("/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "login.html", nil)
	})
	router.POST("/form", func(c *gin.Context) {
		type1 := c.DefaultPostForm("type", "alert")
		username := c.PostForm("username")
		password := c.PostForm("password")
		//hobbys := c.PostFormMap("hobby")
		//hobbys := c.QueryArray("hobby")
		hobbys := c.PostFormArray("hobby")
		c.String(http.StatusOK, fmt.Sprintf("type is %s, user is %s, passwor is %s, hobby is %v",
			type1, username, password, hobbys))
	})
	v1 := router.Group("/v1")
	v1.GET("/file", func(context *gin.Context) {
		context.HTML(http.StatusOK, "file.html", nil)
	})
	v1.POST("/upload", func(c *gin.Context) {
		file, _ := c.FormFile("file")
		log.Println(file)

		// Upload the file to specific dst.
		c.SaveUploadedFile(file, file.Filename)
		c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))
	})
	v2 := router.Group("/v2")
	v2.GET("/file", func(context *gin.Context) {
		context.HTML(http.StatusOK, "files.html", nil)
	})
	v2.POST("/upload", func(context *gin.Context) {
		form, err := context.MultipartForm()
		if err != nil {
			context.String(http.StatusBadRequest, fmt.Sprintf("get from err: %s", err.Error()))
		}
		files := form.File["files"]
		for _, file := range files {
			if err := context.SaveUploadedFile(file, file.Filename)
				err != nil {
				context.String(http.StatusBadRequest, fmt.Sprintf("upload file err: %s", err.Error()))
				return
				context.String(http.StatusOK, fmt.Sprintf("Uploaded successfully %d files ", len(files)))
			}
		}
	})
	//curl -v POST http://127.0.0.1:3000/loginJSON -H 'content- type:application/json' -d '{"user":"ls","password":"123456"}'
	router.POST("/loginJSON", func(c *gin.Context) {
		var json Login
		if err :=c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		if json.User != "cl" || json.Password != "123456" {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
	})

	router.POST("loginForm", func(c *gin.Context) {
		var form Login
		if err := c.Bind(&form); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		if form.User != "cl" || form.Password != "123456" {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
	})

	router.NoRoute(func(c *gin.Context) {
		c.JSON(http.StatusNotFound, gin.H{
			"code": "PAGE_NOT_FOUND", "message": "Page not found"})
	})


	//s := &http.Server{
	//	Addr:           ":3000",
	//	Handler:        router,
	//	ReadTimeout:    10 * time.Second,
	//	WriteTimeout:   10 * time.Second,
	//	MaxHeaderBytes: 1 << 20,
	//}
	//s.ListenAndServe()
	router.Run(":3000")
}
