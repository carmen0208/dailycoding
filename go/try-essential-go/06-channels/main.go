package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	links := []string {
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.com",
		"http://amazon.com",
		"http://github.com",
		"http://wrong.wrong",
	}

	// channel to connect main and other go rountines
	c := make(chan string)


	for _, link := range links {
		// go roution
		go checkLink(link, c)
	}

	//for i := 0; i < len(links); i++ {
	//	fmt.Println(<- c)
	//}

	// infinite check the link time by time
	//for {
	//	go checkLink(<- c, c)
	//}

	for l := range c {
		//go checkLink(<- c, c)
		//go checkLink(l, c)
		go func(link string) {
			time.Sleep(5 * time.Second)
			checkLink(link, c)
		}(l)
	}
}

func checkLink(link string, c chan string) {
	_, err := http.Get(link)
	if err != nil {
		fmt.Println(link, "might be down!")
		//c <- "Might be down, I think"
		c <- link
		return
	}
	fmt.Println(link, "is up!")
	c <- link
	//c <- "Yes, it is Up!"
}