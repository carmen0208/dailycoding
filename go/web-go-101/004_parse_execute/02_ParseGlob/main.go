package main

import (
	"log"
	"os"
	"text/template"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("004_parse_execute/02_ParseGlob/templates/*"))
}

func main() {
	//tpl, err := template.ParseGlob("004_parse_execute/02_ParseGlob/templates/*")
	//if err != nil {
	//	log.Fatalln(err)
	//}

	err := tpl.Execute(os.Stdout, nil)
	if err != nil {
		log.Println(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "vespa.gohtml", nil)
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "two.gohtml", nil)
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "one.gohtml", nil)
	if err != nil {
		log.Fatalln(err)
	}
}
