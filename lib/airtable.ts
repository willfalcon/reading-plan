export async function getRecord(testament: string) {
  try {
    const res = await fetch(
      `https://api.airtable.com/v0/appL8KR24vNb62AFA/tbldZubhzWXDyqAzK?maxRecords=1&view=Grid%20view&filterByFormula=NOT(%7B${testament}+Read%7D+%3D+1)`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
        },
      }
    ).then(res => res.json());
    if (res.records) {
      return res.records[0];
    }
  } catch (error) {
    console.log(error);
    return 'Nothing found';
  }
}

export async function progressRecord(id: string, testament: string): Promise<{success: boolean, message: string}> {
  try {
    let data = {
      fields: testament === 'OT' ? {
        "OT Read": true
      } : {
        "NT Read": true
      }
    }
    const res = await fetch(`https://api.airtable.com/v0/appL8KR24vNb62AFA/Sheet1/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
    return {
      success: true,
      message: ''
    }
  } catch (error) {
    console.error('progressRecord function error');
    console.log(error);
    return {success: false, message: getErrorMessage(error) }
  }
}

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message
	return String(error)
}