package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)


type logWriter struct {}
func main() {

	//https://golang.org/pkg/net/http/#Get
	resp, err := http.Get("http://www.google.com")
	if err != nil {
		fmt.Println("Error", err)
		os.Exit(1)
	}

	// option 0: it is not a good demostration
	//fmt.Println(resp)

	// option 1
	// make a slice of byte, make sure they have 999999 space in it
	//bs := make([]byte, 999999)
	//resp.Body.Read(bs)
	//fmt.Println(string(bs))

	//option 2
	// func Copy(dst Writer, src Reader)
	// it is a function that read from somewhere as a source
	// and copy it to other channel
	//io.Copy(os.Stdout, resp.Body)



	// Option 3, implement a write type ourselves to get it write to
	lw := logWriter{}
	io.Copy(lw, resp.Body)
}

func (logWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	fmt.Println("Just wrote this many bytes: ", len(bs))
	return len(bs), nil
}
