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
	// Ajouter un item
	const addItem = () => {
     //doSomething
		const newTodo: ToDo = {
			id: Math.floor(Math.random() * 100),
			text: textInput.trim(),
		};

		setToDos([...toDos, newTodo]);
		setTextInput("");

		// console.log(newTodo);
		// console.log(toDos);
 	}

	// Supprimer un item
	const deleteItem = ()=> {
     //doSomething
 	}

	// Modifier un item
	const updateItem = ()=> {
     //doSomething
 	}

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
						{/* Card */}
						{/* <div className="card">
							<div className="card-header">
								Tâche à faire
							</div>
							<div className="card-body">
								<h5 className="card-title">Nom de la tâche</h5>
								<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptates.</p>
								<div className="btn-group" role="group" aria-label="Basic example">
									<button type="button" className="btn btn-primary">Modifier</button>
									<button type="button" className="btn btn-danger">Supprimer</button>
								</div>
							</div>
						</div> */}
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
												<button type="button" className="btn btn-primary">Modifier</button>
												<button type="button" className="btn btn-danger">Supprimer</button>
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
