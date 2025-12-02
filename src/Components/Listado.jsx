
function Listado({busqueda,total,arreglo, onImagenClick, infoRaza}){
    return(
        <div className="Lista">
           {
                busqueda === false
                    ?
                    <div>
                        <h3>Este sitio web te mostrará imágenes aleatorias de gatos para alegrar tu día</h3>
                        <p style={{color: '#666', fontSize: '1.1em', marginTop: '10px'}}>
                            Busca por raza de gato. Ejemplos: <strong>Persian</strong>, <strong>Siamese</strong>, <strong>Maine Coon</strong>, <strong>British Shorthair</strong>, <strong>Ragdoll</strong>, <strong>Bengal</strong>, <strong>Scottish Fold</strong>, <strong>Sphynx</strong>
                        </p>
                    </div>
                    :
                    <div>
                        <h3>{total} resultados de búsqueda</h3>
                        {infoRaza && infoRaza.description && (
                            <p style={{color: '#666', fontSize: '1em', marginTop: '10px', maxWidth: '800px', margin: '10px auto', textAlign: 'left', padding: '0 20px'}}>
                                {infoRaza.description}
                            </p>
                        )}
                    </div>
            }

            <div className="Lista-contenido">
                {
                    arreglo.map((gato, i) => {
                        return (
                            <div 
                                className="Lista-gato" 
                                key={gato.id || i}
                                onClick={() => onImagenClick && onImagenClick(gato)}
                            >
                                <img 
                                    width='100%' 
                                    src={gato.url} 
                                    alt={gato.breeds && gato.breeds.length > 0 ? gato.breeds[0].name : 'Gato'} 
                                    style={{objectFit: 'cover', borderRadius: '8px'}}
                                />
                                {!busqueda && gato.breeds && gato.breeds.length > 0 && (
                                    <div style={{padding: '10px'}}>
                                        <h5>{gato.breeds[0].name}</h5>
                                        <p style={{fontSize: '0.9em', color: '#666'}}>{gato.breeds[0].description || ''}</p>
                                    </div>
                                )}
                            </div>
                        )
                    }

                    )
                }

            </div>
        </div>
    );
}


export default Listado;