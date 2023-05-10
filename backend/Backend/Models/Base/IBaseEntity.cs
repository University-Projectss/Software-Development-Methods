namespace Backend.Models.Base
{
    public interface IBaseEntity
    {
        DateTime? DateCreated { get; set; }

        DateTime? DateModified { get; set; }

    }
}
