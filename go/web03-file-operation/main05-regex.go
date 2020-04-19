package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"regexp"
	"strings"
)

//func main() {
//	src := []byte(`
//	call hello alice hello bob
//	call hello eve `)
//	pat := regexp.MustCompile(`(?m)(call)\s+(?P<cmd>\w+)\s+(?P<arg>.+)\s*$`)
//	res := []byte{}
//
//	for _, s := range pat.FindAllSubmatchIndex(src, -1) {
//		res = pat.Expand(res, []byte("$cmd('$arg')\n"), src, s)
//	}
//	fmt.Println(string(res))
//}

func IsIP(ip string) (b bool) {
	if m, _ := regexp.MatchString("^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9] {1, 3}$", ip);
		!m {
		return false
	}
	return true
}

func IsNum(num string) (b bool) {
	if m, _ := regexp.MatchString("^[0-9]+$", num); m {
		return true
	} else {
		return false
	}
}

func main() {
	resp, err := http.Get("http://www.baidu.com")
	if err != nil {
		fmt.Println("http get error.")
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		src := string(body)
		fmt.Println(src)
		fmt.Println("--------------------------------------------------------") //将HTML标签全转换成⼩小写
		re, _ := regexp.Compile("\\<[\\S\\s]+?\\>")
		src = re.ReplaceAllStringFunc(src, strings.ToLower)
		//去除STYLE
		re, _ = regexp.Compile("\\<style[\\S\\s]+?\\</style\\>")
		src = re.ReplaceAllString(src, "")
		//去除SCRIPT
		re, _ = regexp.Compile("\\<script[\\S\\s]+?\\</script\\>")
		src = re.ReplaceAllString(src, "")
		//去除所有尖括号内的HTML代码，并换成换⾏行行符
		re, _ = regexp.Compile("\\<[\\S\\s]+?\\>")
		src = re.ReplaceAllString(src, "\n")
		//去除连续的换⾏行行符
		re, _ = regexp.Compile("\\s{2,}")
		src = re.ReplaceAllString(src, "\n")
		fmt.Println(strings.TrimSpace(src))
	}
