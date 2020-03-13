import React, { useContext } from 'react';
import { entities } from './config';
import './style.css';
import { StoreContext } from '../../../../../../store';

export function EntitySelector() {
	const { store, setStore } = useContext(StoreContext);
	return (
		<div className="entityTypeSelector">
			{entities.length > 1 && (
				<div
					className={`entityType entityType${store.selectedEntityId ? 'Unselected' : 'Selected'}`}
					onClick={() => setStore({ ...store, selectedEntityId: null })}
				>
					All
				</div>
			)}
			{entities.map(entity => (
				<div
					className={`entityType entityType${
						entities.length <= 1 || store.selectedEntityId === entity.id ? 'Selected' : 'Unselected'
					}`}
					onClick={() => setStore({ ...store, selectedEntityId: entity.id })}
				>
					{entity.type}
				</div>
			))}
		</div>
	);
}
