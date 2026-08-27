// Imports
import { useState } from "react";

function App() {
	// Variables
	const [toDos, setToDos] = useState<ToDo[]>([]);
	const [textInput, setTextInput] = useState("");

	interface ToDo {
		id: number;
    	text: string;
	}

	// Logiques
	// Ajouter une tâche dans la liste
	const addItem = () => {
		const trimmed = textInput.trim();
    	if (!trimmed) return ;

		const newTodo: ToDo = {
			id: Math.floor(Math.random() * 100),
			text: trimmed,
		};

		setToDos([...toDos, newTodo]);
		setTextInput("");
 	};

	// Supprimer une tâche
	const deleteItem = (id:number)=> {
		setToDos((toDos) => toDos.filter((todo) => todo.id !== id));
 	};


	// Modifier une ta^che
	const updateItem = (id : number)=> {
		const newText = prompt("Modifier la tâche :");

		if (!newText || newText.trim() === "") return;

		setToDos(
			toDos.map((todo) =>
			todo.id === id
				? { ...todo, text: newText.trim() }
				: todo
			)
		);
 	};

	// Composants
	return (
		<>	
			{/* Titre */}
			<div>
				<h1 className='text-primary'>To do list</h1>
			</div>
			{/* Formulaire d'ajout d'une tâche */}
			<div>
				<form className="row g-3 justify-content-center">
					<div className="col-auto">
						<input
							type="text"
							className="form-control"
							placeholder="Ecrire la tâche"
							value={textInput}
							onChange={(e) => setTextInput(e.target.value)}
						/>
					</div>
					<div className="col-auto">
						<button type="button" className="btn btn-success mb-3" onClick={addItem}>Ajouter</button> 
					</div>
				</form>
			</div>
			{/* Liste des tâches */}
			<div>
				<div className="row justify-content-center">
					<div className="col-auto">
						{/* Si aucune tâche */}
						{toDos.length === 0 ? (
							<p className="text-center text-muted">Aucune tâche pour le moment.</p>
						) : (
							<>
								{toDos.map((toDo) => (
									// <span key={toDo.id}>{toDo.text}</span>

									<div className="card" key={toDo.id}>
										<div className="card-body">
											<h5 className="card-title">{toDo.text}</h5>
											<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptates.</p>
											<div className="btn-group" role="group" aria-label="Basic example">
												<button type="button" className="btn btn-primary" onClick={() => updateItem(toDo.id)}>Modifier</button>
												<button type="button" className="btn btn-danger" onClick={() => deleteItem(toDo.id)}>Supprimer</button>
											</div>
										</div>
									</div>

								))}
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
