//// add Router function
//package main
//
//import (
//	"fmt"
//	"log"
//	"net/http"
//)
//
//func hello(w http.ResponseWriter, r *http.Request) {
//	fmt.Fprintf(w, "Hello, web")
//}
//
//func main() {
//	//http.HandleFunc("/", hello)
//	mux := http.NewServeMux()
//	mux.HandleFunc("/", hello)
//
//	server := &http.Server{
//		Addr: ":8080",
//		Handler: mux,
//	}
//
//	if err := server.ListenAndServe(); err != nil {
//		log.Fatal(err)
//	}
//}
