
package dataGenration;

import com.google.gson.*;


public class DataGenrator
{

    JsonArray ja = new JsonArray();
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    String jsonStr;

    public String genData(int amountOfDataPoints, String fieldsToInclude)
    {
        JsonArray persons = new JsonArray();
        String[] fields = fieldsToInclude.split(",");
        JsonObject person = new JsonObject();

        for (int i = 0; i < amountOfDataPoints; i++)
        {
            for (String field : fields)
            {

                person.addProperty(field, "llama");

            }
            persons.add(person);

        }
        jsonStr = gson.toJson(persons);
        System.out.println(jsonStr);
        return jsonStr;
    }

}
