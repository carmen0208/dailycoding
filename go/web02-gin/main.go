package main

import (
	"web02-gin/initRounter"
)

func main() {
	router:= initRounter.SetUpRouter()
	_ = router.Run()
}
