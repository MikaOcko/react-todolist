// ----------- Imports -----------
import { useState } from "react";

// ---------- Types ----------
interface ToDo {
	id: number;
    text: string;
	description: string,
	completed: boolean;
}

function App() {
	// ---------- Variables----------
	const [toDos, setToDos] = useState<ToDo[]>([]);
	const [textInput, setTextInput] = useState<string>("");
	const [descriptionInput, setDescriptionInput] = useState<string>("");

	// ----------- Logiques ----------
	// Ajouter une tâche dans la liste
	const addItem = () => {
		const textTrimmed = textInput.trim();
		const descriptionTrimmed = descriptionInput.trim();

    	if (!textTrimmed || descriptionTrimmed) return ;

		const newTodo: ToDo = {
			id: Math.floor(Math.random() * 100),
			text: textTrimmed,
			description: descriptionTrimmed,
			completed: false,
		};

		setToDos([...toDos, newTodo]);
		setTextInput("");
 	};

	// Supprimer une tâche
	const deleteItem = (id:number)=> {
		setToDos((toDos) => toDos.filter((todo) => todo.id !== id));
 	};

	// Modifier une tâche
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
	// Cocher / décocher une tâche
	const toggleTodo = (id: number) => {
		setToDos(
			toDos.map((todo) => {
				if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed,
				};
				}
				return todo;
			})
		);
	};

	// ------------ Component (rendering) -----------
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
						<div>
							<label htmlFor="" className="mb-2">Nom</label>
							<input
								type="text"
								className="form-control mb-4"
								placeholder="Ecrire un titre"
								value={textInput}
								onChange={(e) => setTextInput(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="" className="mb-2">Description</label>
							<input
								type="text"
								className="form-control mb-4"
								placeholder="Décrire la tâche"
								value={descriptionInput}
								onChange={(e) => setDescriptionInput(e.target.value)}
							/>
						</div>
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
								{toDos.map((todo) => (
									// <span key={toDo.id}>{toDo.text}</span>

									<div className="card" key={todo.id}>
										<div className="card-body">
											<div className="d-flex align-items-center gap-2">
												<input
													type="checkbox"
													className="form-check-input"
													checked={todo.completed}
													onChange={() => toggleTodo(todo.id)}
												/>
												<h5
													className="card-title mb-0"
													style={{
														textDecoration: todo.completed ? "line-through" : "none",
														color: todo.completed ? "gray" : "inherit",
													}}
												>
													{todo.text}
												</h5>
											</div>
											<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptates.</p>
											<div className="btn-group" role="group" aria-label="Basic example">
												<button type="button" className="btn btn-primary" onClick={() => updateItem(todo.id)}>Modifier</button>
												<button type="button" className="btn btn-danger" onClick={() => deleteItem(todo.id)}>Supprimer</button>
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
