package main

import (
	"os"
	"strings"
	"text/template"
)

var tpl *template.Template

type saga struct {
	Name string
	Motto string
}

var fm = template.FuncMap{
	"uc": strings.ToUpper,
}

type car struct {
	Manufacture string
	Model string
	Doors int
}
func init() {
	tpl = template.Must(template.New("").Funcs(fm).ParseGlob("008_template_func/01_func_basic/*.gohtml"))
}
func main() {
	c1 := car{
		Manufacture: "Ford",
		Model: "Focus",
		Doors: 5,
	}
	c2 := car {
		Manufacture: "Subaru",
		Model: "Lagacy",
		Doors: 5,
	}

	cars := []car{c1, c2}

	tpl.ExecuteTemplate(os.Stdout, "tpl.gohtml", cars)

}
