package main

import (
	"fmt"
	"net/http"
)

func main() {
	links := []string {
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.com",
		"http://amazon.com",
		"http://github.com",
	}


	for _, link := range links {
		checkLnik(link)
	}
}

func checkLnik(link string) {
	_, err := http.Get(link)
	if err != nil {
		fmt.Println(link, "might be down!")
	}
	fmt.Println(link, "is up!")
}