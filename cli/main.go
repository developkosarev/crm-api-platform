package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	PrintHello()
	for i := 0; i < 5; i++ {
		PrintNumber(i)
	}
	PrintDb()

	log.Println("Stopping")
}

func PrintHello() {
	fmt.Println("Hello, Go")
}
func PrintNumber(number int) {
	fmt.Println(number)
}

func PrintDb() {
	var host string
	host = os.Getenv("DB_HOST")

	fmt.Println(host)
}
