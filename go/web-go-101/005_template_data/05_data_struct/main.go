package main

import (
	"log"
	"os"
	"text/template"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("005_template_data/05_data_struct/*.gohtml"))

}

type saga struct {
	Name string
	Motto string
}
func main() {
	//names := []string{"Carmen", "Lucy", "David", "Nico"}

	buddha := saga{
		Name: "Buddha",
		Motto: " The belief of no belief",
	}
	err := tpl.Execute(os.Stdout, buddha)
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "tpl_struct_variable.gohtml", buddha)
	if err != nil {
		log.Fatalln(err)
	}

}
