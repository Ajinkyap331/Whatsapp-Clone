
def Val(df):
    b = {}
    c = {}
    for index, row in df.iterrows():
        a = {}
        if row['SELECTOR'] == 'MainCharacter':
            c['MainCharacter'] = row['name']
            continue
        if row['SELECTOR'] in ['DM', 'Groups']:
            c[row['SELECTOR']] = row['name'].split(",")
            continue
        a['name'] = row['name']
        a['lastMessage'] = row['lastMessage']
        if row['SELECTOR'] in ["Official Group", "Un-Official Group"]:
            a['seen'] = row['seen'].split(",")
        else:
            a['seen'] = row['seen']
        a['status'] = row['status']
        a['number'] = row['number']
        a['NOM'] = row['NOM']
        a['time'] = row['time']
        b[row['SELECTOR']] = a
    c['Characters'] = b
    return(c)
