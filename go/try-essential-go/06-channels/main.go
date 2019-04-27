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

	// channel to connect main and other go rountines
	c := make(chan string)


	for _, link := range links {
		//checkLnik(link)

		// go roution
		go checkLnik(link, c)
	}

	for i := 0; i < len(links); i++ {
		fmt.Println(<- c)
	}
}

func checkLnik(link string, c chan string) {
	_, err := http.Get(link)
	if err != nil {
		fmt.Println(link, "might be down!")
		c <- "Might be down, I think"
		return
	}
	fmt.Println(link, "is up!")
	c <- "Yes, it is Up!"
}