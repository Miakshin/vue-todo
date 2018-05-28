package main
import (
    "os"
    "log"
    "testing"
)
var a App
func TestMain(m *testing.M) {
    a = App{}
    a.Initialize("admin, "admin", "rest_api_example")
    ensureTableExists()
    code := m.Run()
    clearTable()
    os.Exit(code)
}
func ensureTableExists() {
    if _, err := a.DB.Exec(tableCreationQuery); err != nil {
        log.Fatal(err)
    }
}
func clearTable() {
    a.DB.Exec("DELETE FROM users")
    a.DB.Exec("ALTER TABLE users AUTO_INCREMENT = 1")
}
const tableCreationQuery = `
CREATE TABLE IF NOT EXISTS users
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    login VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
)`
