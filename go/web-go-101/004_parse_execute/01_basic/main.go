package main

import (
	"log"
	"os"
	"text/template"
)

func main() {
	tpl, err := template.ParseFiles("004_parse_execute/01_basic/tpl.gohtml")
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.Execute(os.Stdout, nil)
	if err != nil {
		log.Fatalln(err)
	}
	//nf, err := os.Create("004_parse_execute/01_basic/index.html")
	//if err != nil {
	//	log.Fatalln("error creating file", err)
	//}
	//defer nf.Close()
	//
	//err = tpl.Execute(nf, nil)
	//if err != nil {
	//	log.Fatalln(err)
	//}

	tpl, err = tpl.ParseFiles("004_parse_execute/01_basic/two.gmao")
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "two.gmao", nil)
	if err != nil {
		log.Fatalln(err)
	}

}