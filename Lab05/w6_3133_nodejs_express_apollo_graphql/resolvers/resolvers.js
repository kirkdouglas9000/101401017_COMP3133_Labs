import MovieModel from '../models/movie.js';

const resolvers = {
  Query: {
    getAllMovies: async () => {
      return await MovieModel.find();
    },

    getMovieByID: async (_, { id }) => {
      return await MovieModel.findById(id);
    },

    getMoviesByDirector: async (_, { director_name }) => {
      return await MovieModel.find({ director_name });
    }
  },

  Mutation: {
    addMovie: async (_, args) => {
      const movie = new MovieModel(args);
      await movie.save();
      return movie;
    },

    updateMovie: async (_, args) => {
      const { id, ...updateFields } = args;
      return await MovieModel.findByIdAndUpdate(id, updateFields, { new: true });
    },

    deleteMovie: async (_, { id }) => {
      await MovieModel.findByIdAndDelete(id);
      return `Movie with ID ${id} was deleted`;
    }
  }
};


export default resolvers;