.calendar-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  align-items: center;
}

.controls select,
.controls button {
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #007bff;
  cursor: pointer;
}

.controls button {
  background-color: #007bff;
  color: white;
  transition: background 0.3s;
}

.controls button:hover {
  background-color: #0056b3;
}

.holiday-names {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.7rem;
  color: #d00000;
}

.light-green-week {
  background-color: #b7e4c7;
  transition: background-color 0.5s ease;
}

.dark-green-week {
  background-color: #40916c;
  color: white;
  transition: background-color 0.5s ease;
}

.today {
  border: 2px solid #ff6b6b;
  border-radius: 50%;
}

.loading,
.error {
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
}

.quarter-view {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 900px) {
  .quarter-view {
    flex-direction: column;
    align-items: center;
  }
}
