import { mapGetters } from 'vuex';

const getCategoryName = {
  methods: {
    getTag(categories) {
      if (!this.getTagById) throw new Error('NOT_FOUND_METHOD');

      const result = this.getTagById(categories[0]);
      if (!result) return '';

      return result.data.name;
    },
  },
  computed: {
    ...mapGetters('blog', {
      getTagById: 'getTagById',
    }),
  },
};

export default getCategoryName;
