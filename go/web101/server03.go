//// add Router function
//package main
//
//import (
//	"fmt"
//	"io/ioutil"
//	"log"
//	"net/http"
//)
//
////func hello(w http.ResponseWriter, r *http.Request) {
////	fmt.Fprintf(w, "Hello, web")
////}
//
//type GreetingHandler struct {
//	Language string
//}
//
//func (h GreetingHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
//	fmt.Fprintf(w, "%s", h.Language)
//}
//
//func urlHandler(w http.ResponseWriter, r *http.Request) {
//	URL := r.URL
//
//	fmt.Fprintf(w, "Scheme: %s\n", URL.Scheme)
//	fmt.Fprintf(w, "Host: %s\n", URL.Host)
//	fmt.Fprintf(w, "Path: %s\n", URL.Path)
//	fmt.Fprintf(w, "RawPath: %s\n", URL.RawPath)
//	fmt.Fprintf(w, "RawQuery: %s\n", URL.RawQuery)
//	fmt.Fprintf(w, "Fragment: %s\n", URL.Fragment)
//}
//
//// proto is the protocol of http 1.1
//func protoFunc(w http.ResponseWriter, r *http.Request) {
//	fmt.Fprintf(w, "Proto: %s\n", r.Proto)
//	fmt.Fprintf(w, "ProtoMajor: %d\n", r.ProtoMajor)
//	fmt.Fprintf(w, "ProtoMinor: %d\n", r.ProtoMinor)
//}
//
//func headerHandler(writer http.ResponseWriter, request *http.Request) {
//	for key, value := range request.Header {
//		fmt.Fprintf(writer, "%s: %v\n", key, value)
//	}
//}
//
//func bodyHandler(writer http.ResponseWriter, request *http.Request) {
//	data := make([]byte, request.ContentLength)
//	request.Body.Read(data)
//	defer request.Body.Close()
//
//	fmt.Fprintln(writer, string(data))
//}
//
//func indexHandler(w http.ResponseWriter, r *http.Request) {
//	fmt.Fprint(w, `
//<html>
//    <head>
//        <title>Go Web</title>
//    </head>
//<body>
//<form method="post" action="/body">
//<label for="username">用户名:</label>
//<input type="text" id="username" name="username"> <label for="email">邮箱:</label>
//<input type="text" id="email" name="email"> <button type="submit">提交</button>
//        </form>
//    </body>
//</html> `)
//}
//
//func uploadHandler(w http.ResponseWriter, r *http.Request) {
//	fmt.Fprint(w, `
//<html>
//    <head>
//        <title>Go Web</title>
//    </head>
//	<body>
//		<form action="/multipartform?lang=cpp&name=dj" method="post" enctype="multipart/form-data">
//			<label>MultipartForm:</label>
//			<input type="text" name="lang" />
//			<input type="text" name="age" />
//			<input type="file" name="uploaded" />
//			<button type="submit">提交</button>
//		</form>
//    </body>
//</html> `)
//}
//func multipartFormHandler(w http.ResponseWriter, r *http.Request) {
//	r.ParseMultipartForm(1024)
//	fmt.Fprintln(w, r.MultipartForm)
//	fileHeader := r.MultipartForm.File["uploaded"][0]
//	file, err := fileHeader.Open()
//	if err != nil {
//		fmt.Println("Open failed: ", err)
//		return
//	}
//	data, err := ioutil.ReadAll(file)
//	if err == nil {
//		fmt.Fprintln(w, string(data))
//	}
//
//}
//func main() {
//	//http.
//
//	mux := http.NewServeMux()
//	//mux.HandleFunc("/", hello)
//	mux.HandleFunc("/", indexHandler)
//	mux.Handle("/chinese", GreetingHandler{Language: "你好"})
//	mux.Handle("/english", GreetingHandler{Language: "Hello"})
//	//localhost:8080/url/posts?page=1&count=10#main
//	mux.HandleFunc("/url", urlHandler)
//	mux.HandleFunc("/proto", protoFunc)
//	mux.HandleFunc("/header", headerHandler)
//	mux.HandleFunc("/body", bodyHandler)
//	mux.HandleFunc("/upload", uploadHandler)
//	mux.HandleFunc("/multipartform", multipartFormHandler)
//	server := &http.Server{
//		Addr:    ":8080",
//		Handler: mux,
//	}
//
//	if err := server.ListenAndServe(); err != nil {
//		log.Fatal(err)
//	}
//}
//
