package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type player struct {
	Name 		string	`json:"name"`
	Email 		string	`json:"email"`
	Phone		int		`json:"phone"`
	Address 	string	`json:"address"`
	Username	string	`json:"username"`
	Password 	string	`json:"password"`
	Card 		int		`json:"card"`
}

dbAddress := "localhost:1433"

func main() {
	// Initializing router & post/get methods
	router := gin.Default()
	router.GET(dbAddress + "", getPlayers)
	router.POST(dbAddress + "", getPlayers)
	
	// Running the API locally at 8080
	router.Run("localhost:8080")
}

func getPlayers(context *gin.Context) {
	// Parsing players stuct into a JSON
	// & sending code 200 (OK)
	context.IndentedJSON(http.StatusOK, players)
}

func postPlayers(context *gin.Context) {
	var newPlayer player
	
	// Binding request body to newPlayer
	err := context.BindJSON(&newPlayer)
	if err != nil {
		return
	}

	// Appending newPlayer to player
	// & sending code 201 (CREATED)
	players = append(players, newPlayer)
	context.IndentedJSON(http.StatusCreated, newPlayer)
}
