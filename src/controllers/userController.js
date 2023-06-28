import { pool } from "../db.js";

class UserController {
    // Controlador para la ruta GET '/'
    async get(req, res) {
      try {
        
        const query = `SELECT Id_Direccion, Direccion, Alias_Direccion, ST_X(Ubicacion) AS Longitud, ST_Y(Ubicacion) AS Latitud
                      FROM tbl_direcciones
                      WHERE Estado_Direccion = 1`;

        const [rows,fields] = await pool.query(query)

        if(rows.length <= 0){

          return res.status(404).json({
            message:'Ningún resultado obtenido',
            status:'error',
            data: rows
          });
        }
        res.status(200).json({
          message:'Lista de Direcciones',
          status:'success',
          data: rows
        });
        
      } catch (error) {
        // Manejo de errores
        res.status(500).json({
          message:'Error interno',
          status:'error',
          data: []
        });
      }
    }
    
    // Controlador para la ruta POST '/'
    async create(req, res) {
      try {
        // Lógica para crear un nuevo usuario
        const { name, email, password } = req.body;d
        const user = new User({ name, email, password }); // Suponiendo que utilizas un modelo User
        
        await user.save();
        
        // Enviar respuesta con el usuario creado
        res.status(201).json(user);
      } catch (error) {
        // Manejo de errores
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo usuario' });
      }
    }
    
    // Otros controladores para actualizar, eliminar, etc.
}

export default UserController