package main

import (
	"log"
	"os"
	"text/template"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("005_template_data/04_data_map/*.gohtml"))

}

func main() {
	//names := []string{"Carmen", "Lucy", "David", "Nico"}

	buddha := map[string]string{
		"India":    "Gandhi",
		"America":  "MLK",
		"Meditate": "Buddha",
		"Love":     "Jesus",
		"Prophet":  "Muhammad",
	}
	err := tpl.Execute(os.Stdout, buddha)
	if err != nil {
		log.Fatalln(err)
	}

	err = tpl.ExecuteTemplate(os.Stdout, "tpl_map_variable.gohtml", buddha)
	if err != nil {
		log.Fatalln(err)
	}

}
