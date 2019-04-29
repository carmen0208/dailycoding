package main

import (
	"log"
	"os"
	"text/template"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("005_template_data/03_data_slice/*.gohtml"))

}

func main() {
	names := []string{"Carmen", "Lucy", "David", "Nico"}

	err := tpl.Execute(os.Stdout, names)
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "tpl_slice_variable.gohtml", names)
	if err != nil {
		log.Fatalln(err)
	}

}
